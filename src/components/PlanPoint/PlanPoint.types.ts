import {PlanPointDayPart, PlaonPointPriorityType} from '../../types/PlanPoint';

export interface PlanPointProps {
  type: PlanPointDayPart;
  name: string;
  priority: PlaonPointPriorityType;
  isDone: boolean;
}
