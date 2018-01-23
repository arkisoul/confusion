import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
      return LEADERS;
  }

  getLeader(id: number): Leader {
      return LEADERS.filter((leader: Leader) => (leader.id === id))[0];
  }

  getFeaturedLeader(): Leader {
      return LEADERS.filter((leader: Leader) => (leader.featured))[0];
  }

}
