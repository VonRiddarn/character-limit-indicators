import IndicatorStyle from "./IndicatorStyle";

type Indicator = {
	type: "soft" | "hard",
	limit: Number,
	color: string,
	style: IndicatorStyle,
}

export default Indicator;