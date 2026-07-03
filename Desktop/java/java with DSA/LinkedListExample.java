
class Node {
    int data;
    Node next;

   
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}


class MyLinkedList {
    Node head;

   
    public void add(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public void remove(int data) {
        if (head == null) return;

        if (head.data == data) {
            head = head.next;
            return;
        }

        Node current = head;
        while (current.next != null && current.next.data != data) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
        }
    }

    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}

public class LinkedListExample {
    public static void main(String[] args) {
        MyLinkedList list = new MyLinkedList();

        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);

        System.out.println("Initial Linked List:");
        list.display();

        list.remove(20);
        System.out.println("After removing 20:");
        list.display();

        list.add(50);
        System.out.println("After adding 50:");
        list.display();
    }
}
