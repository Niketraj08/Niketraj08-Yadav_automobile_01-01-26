public class stack {
    public static void main(String[] args) {
        stack s = new stack(5);
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        System.out.println("Top element: " + s.top());
        s.pop();
        System.out.println("Top element after pop: " + s.top());
        System.out.println("Is stack empty? " + s.isEmpty());
    }
    private int maxSize;
    private int[] stackArray;
    private int top;

    public stack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1;
    }

    public void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack overflow");
            return;
        }
        stackArray[++top] = value;
        System.out.println(value + " pushed into the stack");
    }

    public int pop() {
        if (top == -1) {
            System.out.println("Stack underflow");
            return -1;
        }
        int poppedElement = stackArray[top--];
        System.out.println(poppedElement + " popped from the stack");
        return poppedElement;
    }

    public int top() {
        if (top == -1) {
            System.out.println("Stack is empty");
            return -1;
        }
        return stackArray[top];
    }

    public boolean isEmpty() {
        return (top == -1);
    }
}
