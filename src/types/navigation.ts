import { NativeStackScreenProps } from "@react-navigation/native-stack";

type StackParamList = {
    Weekly: undefined;
    Daily: { index: number };
};

type DailyProps = NativeStackScreenProps<StackParamList, 'Daily'>;

type WeeklyProps = NativeStackScreenProps<StackParamList, 'Weekly'>;

export type {DailyProps as Props, WeeklyProps, StackParamList}
