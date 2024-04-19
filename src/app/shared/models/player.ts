export class Player {
  id: number;
  username: string;

  constructor(player:any) {
    this.id = player.id;
    this.username = player.username;
  }
}
