import {proxy} from 'valtio';

export const PlanPointsStore = proxy({
  planPoints: [],
});

export const PlanPointsActions = {
  setPlanPoints(planDay: Array<object>) {
    PlanPointsStore.planPoints = planDay;
  },
};
