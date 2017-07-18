import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Stix } from '.././stix';
import * as d3 from 'd3';

@Component({
  selector: 'visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css'],
  encapsulation: ViewEncapsulation.None // This is so the styles apply to the d3 generated elements
})
export class VisualizerComponent implements OnInit {
  @ViewChild('d3container') private d3Container: ElementRef;

  private margin:any = { top: 20, bottom: 20, left: 20, right: 20};
  private width:number;
  private height:number;
  private svg:any; // Really a native element
  private forceLayout:d3.Simulation<any, any>;
  private currentlyShowing:Stix.Bundle;

  private nodes:Array<any> = [];
  private edges:Array<any> = [];

  private node:any;
  private edge:any;

  initialized:boolean = false;

  constructor(container: ElementRef) { }

  ngOnInit() {
    this.createViz();
  }

  createViz() {
    let element = this.d3Container.nativeElement;

    // height and width are set, subtracting the margins
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    // Create the svg element as a child of the container and set its size manually
    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth - 20)
      .attr('height', element.offsetHeight - 20);

    this.svg.append("g").attr("class", "links")
    this.svg.append("g").attr("class", "nodes")

    // this is a simple force layout, centered horizontally and vertically
    this.forceLayout = d3.forceSimulation()
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    // the tick function just updates the x and the y based on the layout x and y
    this.forceLayout.on("tick", () => {
      if(this.edge === undefined) { return }
      this.edge.select("path").attr("d", (d) => {
        let dx = d.target.x - d.source.x;
        let dy = d.target.y - d.source.y;
        let dr = 0;
        return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
      });

      this.node.attr("transform", function(d) {
        return "translate(" + (d.x - 15) + "," + (d.y - 15) + ")";
      });
    });

    // SVG Defs are things that can be re-used
    // In this case we define the marker (arrowhead)
    let defs = this.svg.append("svg:defs");
    defs.selectAll("marker")
        .data(["end"])      // Different link/path types can be defined here
      .enter().append("svg:marker")    // This section adds in the arrows
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 33)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .style("stroke-width", 0)
        .style("fill", "#aaa")
      .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");

    this.initialized = true;
  }

  visualize(stix:Stix.Bundle) {
    this.currentlyShowing = stix;
    if(!this.initialized) { return };

    this.processData(stix);

    // ---------------- Start Edges -----------------

    this.edge = this.svg.select("g.links")
      .selectAll(".link")
      .data(this.edges, (d) => d.id)

    let enterEdge = this.edge
      .enter().append("g")
      .attr("class", "link")
    enterEdge.append("path").attr("id", (d) => "path-" + d.id);
    enterEdge.append("text").append("textPath").attr("xlink:href", (d) => "#path-" + d.id).attr("startOffset", "50%")

    let exitEdge = this.edge.exit().remove();

    this.edge = enterEdge.merge(this.edge);
    this.edge.select("textPath").text((d) => d.label)

    // ---------------- End Edges -----------------

    // ---------------- Nodes -----------------

    // UPDATE
    this.node = this.svg.select("g.nodes")
      .selectAll(".node")
      .data(this.nodes, (d) => d.id)

    // ENTER
    let enterNode = this.node
      .enter().append("g")
      .attr("class", "node")
    enterNode.append("image").attr("xlink:href", (d) => "icons/" + d.type + ".png").attr('width', 30).attr('height', 30);
    enterNode.append("title");
    enterNode.append("text").attr("dx", 40).attr("dy", 20);

    // EXIT
    let exitNode = this.node.exit().remove();

    this.node = enterNode.merge(this.node)
    this.node.select("title").text((d) => d.name);
    this.node.select("text").text((d) => d.name);
    this.node.call(d3.drag()
      .on("start", (d:any) => {
        if(!d3.event.active) {
          this.forceLayout.alphaTarget(0.3).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
      }).on("drag", (d:any) => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }).on("end", (d:any) => {
        if(!d3.event.active) {
          this.forceLayout.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
      })
    );

    // ---------------- End Nodes -----------------
  }

  processData(stix:Stix.Bundle) {
    this.forceLayout.stop();
    // Save the old nodes because they contain the existing x, y, vx, vy attributes
    let oldNodes = this.nodes.reduce(function(mp, val) { mp[val.id] = val; return mp; }, {});
    this.nodes = stix.objects.filter((n:Stix.Object) => n.type !== 'relationship').map((d) => Object.assign({}, d));

    // Look through the old nodes and, if it's an update, copy the existing positions back (x, y, vx, vy)
    // This prevents the layout from resetting each time
    this.nodes.forEach(function(n) {
      if(oldNodes[n.id]) {
        n.x = oldNodes[n.id].x;
        n.y = oldNodes[n.id].y;
        n.vx = oldNodes[n.id].vx;
        n.vy = oldNodes[n.id].vy;
      }
    });
    this.edges = []
    stix.objects.forEach((n) => {
      if(n.type == 'relationship') {
        // This if statement prevents us from trying to draw relationships that don't exit
        if(n['source_ref'] && n['target_ref']) {
          let source = stix.objects.find((o) => o.id == n['source_ref'])
          let target = stix.objects.find((o) => o.id == n['target_ref'])

          if(source && source.type != "relationship" && target && target.type != "relationship") {
            this.edges.push({id: n.id, source:n['source_ref'], target:n['target_ref'], label: n['relationship_type']})
          }
        }
      } else {
        for(let k in n) {
          if(k.match(/_ref$/)) {
            if(stix.objects.find((o) => o.id === n[k].id)) {
              this.edges.push({id: n.id+k, source:n.id, target:n[k], label:k})
            }
          } else if (k.match(/_refs$/)) {
            for(let i of n[k]) {
              if(stix.objects.find((o) => o.id === i)) {
                this.edges.push({id: n.id+k+i, source:n.id, target:i, label:k})
              }
            }
          }
        }
      }
    });

    this.forceLayout.nodes(this.nodes)
    this.forceLayout.force('link', d3.forceLink(this.edges).id((d:any) => { return d.id} ).distance(160));
    this.forceLayout.alpha(1).restart();
  }
}
