type TPostParams = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

class PostModel {
  public id;
  public userId;
  public title;
  public body;

  constructor({ body, id, title, userId }: TPostParams) {
    this.id = id;
    this.userId = userId;
    this.body = body;
    this.title = title;
  }
}

export default PostModel;
