export interface Node {
  user: User;
  id: string;
  children: Node[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
}

export type TreeRoot = Node;
