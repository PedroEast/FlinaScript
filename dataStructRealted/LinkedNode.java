/**
 * 链表通常由一连串节点组成，每个节点包含任意的实例数据，和一个或者两个指针
 */
public class LinkedNode {

    /**
     * 双端链表
     */
    public class Node {
        private Object data;
        private Node prev;
        private Node next;

        public Node(Object data) {
            this.data = data;
        }
    }

    private Node head; //链表头
    private Node tail; //链表尾
    private int size; //节点数


    public LinkedNode() {
        head = null;
        tail = null;
        size = 0;
    }

    public void addHead(Object object) {
        Node node = new Node(object);
        if (size == 0){
            head = node;
            tail = node;
            size++;
        } else {
            head.prev = node;
            node.next = head;
            head = node;
            size++;
        }
    }

    public void deleteHead() {
        if (size==0){
            throw new RuntimeException("This LinkedNode instance is null.");
        }
        head = head.next;
        head.prev = null;
        size--;
    }

    public void addTail(Object object) {
        Node node = new Node(object);
        if (size == 0) {
            head = node;
            tail = node;
            size++;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
            size++;
        }
    }

    public void deleteTail() {
        if (size== 0){
            throw new RuntimeException("This linkedNode instance is null.");
        }
        tail = tail.prev;
        tail.next = null;
        size--;
    }

    public void display() {
        Node node = head;
        while (size > 0){
            System.out.println(node.data+ " -> ");
            size--;
        }
    }
}
