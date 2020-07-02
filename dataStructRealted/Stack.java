import java.util.Arrays;

/**
 * 基于数组实现的栈，需要给出初始容量。
 */
public class Stack {
    // 通常可以利用栈来实现字符串的逆序，还可以利用栈来判断分隔符是否成对出现。如<a[b{c}])，可以正进反出，栈为空则成功。

    // 固定数据类型；
    // private int[] stack;
    // 动态数据类型
    private Object[] objStack;
    private int maxSize;
    private int top;

    public Stack(){

    }

    public Stack(int maxSize) {
        if (maxSize > 0){
            objStack = new Object[maxSize];
            this.maxSize = maxSize;
            top = -1;
        } else {
            throw new RuntimeException("初始化大小错误：maxSize应为正数，然而maxSize = " + maxSize);
        }
    }

    public void push(Object obj) {
        // 扩容
        grow();
        objStack[++top] = obj;
    }

    private void grow() {
        if (top == maxSize - 1) {
            // 左移运算符，1表示乘以2的一次方
            maxSize = maxSize << 1;
            objStack = Arrays.copyOf(objStack, maxSize);
        }
    }

    public Object pop() {
        Object obj = peekTop();
        objStack[top--] = null;
        return obj;
    }

    private Object peekTop() {
        if (top != -1) {
            return objStack[top];
        } else {
            throw new RuntimeException("Stack is null.");
        }
    }

    /**
     * 基于链式存储，不是连续空间
     * @param <Object>
     */
    private class Node<Object> {
        private Object data;
        private Node next;

        public Node(Object data, Node next) {
            this.data = data;
            this.next = next;
        }
    }

    private Node nodeHead;

    private int nodeSize;

    public void nodePush(Object obj) {
        // 栈顶指向新元素，新元素的next指针指向原先栈顶元素。
        nodeHead = new Node(obj, nodeHead);
        nodeSize++;
    }

    public Object nodePop() {
        Node old = nodeHead;
        old.next = null;
        nodeHead = nodeHead.next;
        nodeSize--;
        return old;
    }

    public Object peekNodeTop() {
        if (nodeHead != null) {
            Object data = null;
            data = nodeHead.data;
            return data;
        } else {
            throw new RuntimeException("Stack is null.");
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("[ ");
        for (Node<Object> node = nodeHead; node != null; node = node.next) {
            sb.append(node.data.toString() + " ");
        }
        sb.append("]");
        return sb.toString();
    }
}
