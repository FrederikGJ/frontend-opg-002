import java.security.PublicKey;
import java.util.List;

public class Node {
        public int data;
        public List<Node> children;
        public Node parent;
        public String name;

        // make root constructor
        public Node(int data, List<Node> children, Node parent, String name) {
                this.data = data;
                this.children = children;
                this.parent = parent;
                this.name = name;
        }

        public Node(){}

        public void addChild(Node child) {
                children.add(child);
        }

        public void addParent(Node parent) {
                this.parent = parent;
        }

        public void print() {
                System.out.println("name: " + name);
                System.out.println("data: " + data);
                System.out.println("children: " + children.toString());
                System.out.println("parent: " + parent);
        }

        //make custom s´tostring that only prints name 
        @Override
        public String toString() {
                return name;
        }

}
