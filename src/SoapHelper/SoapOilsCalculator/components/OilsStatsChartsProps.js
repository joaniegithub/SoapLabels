import {
	Chart,
	ArgumentAxis,
	ValueAxis,
	LineSeries,
	AreaSeries,
	BarSeries,
	Title,
	Legend,
	ScatterSeries,
	Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { curveCatmullRom, curveStep, line, stackOffsetExpand } from "d3-shape";
import * as React from "react";

const colors = [
	"#005d5d",
	"#FF7043",
	"#33b1ff",
	"#EC407A",
	"#f6c85f",
	"#46d39a",
	"#8b6ec3",
	"#a6d177",
	"#78909C",
];

const pointOptions = { point: { size: 10 } };
export const Point = (props) => {
	const { value } = props;
	if (value) {
		return <ScatterSeries.Point {...props} {...pointOptions} />;
	}
	return null;
};

export const LineWithPoint = (props) => (
	<React.Fragment>
		{/*<LineSeries.Path
			{...props}
			path={line()
				.defined((d) => d.value)
				.x(({ arg }) => arg)
				.y(({ val }) => val)
				.curve(curveStep)}
			/>*/}
		<ScatterSeries.Path {...props} pointComponent={Point} />
	</React.Fragment>
);

const patchProps = ({ hoverIndex, ...props }) => ({
	state: props.index === hoverIndex ? "hovered" : null,
	...props,
});
export const Line = (props) => (
	<React.Fragment>
		<LineSeries.Path
			{...props}
			path={line()
				.defined((d) => d.value)
				.x(({ arg }) => arg)
				.y(({ val }) => val)} // curveCatmullRom
		/>
		<ScatterSeries.Path {...props} pointComponent={Point} />
	</React.Fragment>
);
export const LinePoint = (props) => (
	<ScatterSeries.Point point={pointOptions} {...patchProps(props)} />
);

export const format = () => (tick) => tick;
export const formatForFullstack = (scale) => scale.tickFormat(null, "%");
const legendStyles = () => ({
	root: {
		display: "flex",
		margin: "auto",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		paddingTop: "20px",
	},
});
const legendLabelStyles = (theme) => ({
	label: {
		paddingTop: "2px",
		whiteSpace: "nowrap",
		FontFamily: "Lato",
	},
});
const legendItemStyles = () => ({
	item: {
		flexDirection: "row",
		width: "auto",
	},
});

const legendRootBase = ({ classes, ...restProps }) => (
	<Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
	<Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
	<Legend.Item className={classes.item} {...restProps} />
);

export const Root = withStyles(legendStyles, { name: "LegendRoot" })(
	legendRootBase
);
export const RootWithTitle = withStyles(legendStyles)(
	({ classes, ...restProps }) => (
		<div>
			<Legend.Root {...restProps} />
		</div>
	)
);
export const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
	legendLabelBase
);
export const Item = withStyles(legendItemStyles, { name: "LegendItem" })(
	legendItemBase
);
export const ValueLabel = (props) => {
	const { text } = props;
	return <ValueAxis.Label {...props} text={`${text}%`} />;
};
export const ValueLabelPercent = (props) => {
	const { text } = props;
	return <ValueAxis.Label {...props} text={`${text}`} />;
};
const titleStyles = {
	title: {
		whiteSpace: "pre",
		fontFamily: "Lato",
		fontSize: "1.25em",
		marginBottom: 0,
	},
};
export const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
	<Title.Text {...props} className={classes.title} />
));

const formatTooltip = format(".1f");
