import { RootState } from '@/store/store';
export const selectCounterValue = (s: RootState) => s.counter.value;