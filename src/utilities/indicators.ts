import Indicator from "../types/Indicator";

type IndicatorCollection = {
	[key:string]: Indicator
};

const indicators:IndicatorCollection = {
	soft: {
		type: "soft",
		limit: 80,
		color: "#ffea8e",
		style: "block",
		isActive: true // Internal, do not show to end user!
	},

	hard: {
		type: "hard",
		limit: 100,
		color: "#d12651",
		style: "block",
		isActive: true // Internal, do not show to end user!
	},
};

export default indicators;