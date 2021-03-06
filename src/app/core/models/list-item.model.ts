export interface ListItemModel {
  id: string;
  name: string;
  ups: number;
  downs: number;
  upvoteRatio: number;
  content: string;
}

export class ListItem implements ListItemModel {
  id = '';
  name = '';
  ups = 0;
  downs = 0;
  upvoteRatio = 0;
  content = '';

  constructor(dto?: ListItemModel) {
    if (!dto) {
      return;
    }
    this.id = dto.id;
    this.name = dto.name;
    this.ups = dto.ups;
    this.upvoteRatio = dto.upvoteRatio;
    this.content = dto.content;
  }
}
