import java.util.ArrayList;
import java.util.List;
import javax.management.relation.Role;

public class Main {
        public static void main(String[] args) {

                List <Node> rootchildren = new ArrayList<>();
                List <Node> child3children = new ArrayList<>();

                Node root = new Node(1, rootchildren, null, "root");
                Node child1 = new Node(2, null, root, "child1");
                Node child2 = new Node(3, null, root, "child2");
                Node child3 = new Node(4, child3children, root, "child3");
                Node child4 = new Node(5, null, child3, "child4");

                root.children.add(child1);
                root.children.add(child2);
                root.children.add(child3);
                child3.children.add(child4);

                root.print();
                System.out.println();
                child3.print();
        }
}
