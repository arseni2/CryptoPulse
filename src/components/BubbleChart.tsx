"use client"
import React, {useLayoutEffect} from 'react';
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";

const BubbleChart = () => {
	useLayoutEffect(() => {
		let root = am5.Root.new("chartdiv");
		const responsive = am5themes_Responsive.new(root)

		responsive.addRule({
			name: "AxisRendererY",
			relevant: function (width, height) {
				return width < 1000;
			},
			settings: {
				inside: true
			}
		});

		root.setThemes([
			am5themes_Animated.new(root),
			responsive
		]);

		let data = {
			value: 0,
			children: []
		}

		for (var i = 0; i < 15; i++) {
			data.children.push({name: "node " + i, value: Math.random() * 20 + 1})
		}

// Create wrapper container
		let container = root.container.children.push(
			am5.Container.new(root, {
				width: am5.percent(100),
				height: am5.percent(100),
				layout: root.verticalLayout
			})
		);

// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
		let series = container.children.push(
			am5hierarchy.ForceDirected.new(root, {
				singleBranchOnly: false,
				downDepth: 2,
				topDepth: 1,
				initialDepth: 1,
				maxRadius: 60,
				minRadius: 20,
				valueField: "value",
				categoryField: "name",
				childDataField: "children",
				manyBodyStrength: -13,
				centerStrength: 0.8
			})
		);

		series.get("colors").setAll({
			step: 1
		});

		series.links.template.setAll({
			strokeWidth: 2
		});

		series.nodes.template.setAll({
			tooltipText: null,
			cursorOverStyle: "pointer"
		});

		let selectedDataItem;

// handle clicking on nodes and link/unlink them
		series.nodes.template.events.on("click", function (e) {
			// check if we have a selected data item
			if (selectedDataItem) {
				let targetDataItem = e.target.dataItem;
				// if yes, and it's the same, unselect
				if (e.target.dataItem == selectedDataItem) {
					selectedDataItem.get("outerCircle").setPrivate("visible", false);
					selectedDataItem = undefined;
				}
				// otherwise connect selected with a clicked point
				else {
					if (series.areLinked(selectedDataItem, targetDataItem)) {
						series.unlinkDataItems(selectedDataItem, targetDataItem);
					} else {
						series.linkDataItems(selectedDataItem, targetDataItem, 0.2);
					}
				}
			}
			// if no selected data item, select
			else {
				selectedDataItem = e.target.dataItem;
				selectedDataItem.get("outerCircle").setPrivate("visible", true)
			}
		})

		series.data.setAll([data]);
		series.set("selectedDataItem", series.dataItems[0]);

// Make stuff animate on load
		series.appear(1000, 100);

		return () => {
			root.dispose()
		}
	}, [])

	return (
		<div className={"chartdiv"} id={"chartdiv"} style={{maxWidth: `1200px`, height: "98vh"}}>

		</div>
	);
};

export default BubbleChart;