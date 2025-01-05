export interface HighScore {
    _id: number;
    username: string;
    firstName: string;
    lastName: string;
    bestScore: number;
    // createdAt: string;
  }
  
  export interface DashboardStats {
    totalPlayers: number;
    averageScore: number;
    highestScore: number;
    gamesPlayed: number;
  }
  