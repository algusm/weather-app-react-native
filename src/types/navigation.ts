import HourlyWeatherForecast from "./hourlyWeatherForecast";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type StackParamList = {
    Weekly: undefined;
    Daily: { dailyForecast: HourlyWeatherForecast[] };
};

type Props = NativeStackScreenProps<StackParamList, 'Daily'>;

type WeeklyProps = NativeStackScreenProps<StackParamList, 'Weekly'>;

export type {Props, WeeklyProps, StackParamList}
