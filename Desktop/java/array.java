import java.util.*;

public class array {
  public static void main(String[] args) {
    System.out.print("enter yours marks :- ");
    int marks[] = new int[100];
    Scanner Sc = new Scanner(System.in);
    marks[0] = Sc.nextInt();
    marks[1] = Sc.nextInt();
    marks[2] = Sc.nextInt();
    System.out.println("phy = " + marks[0]);
    System.out.println("chem = " + marks[1]);
    System.out.println("math = " + marks[2]);
    int precentage = (marks[0] + marks[1] + marks[2]) / 3;
    System.out.println(" precentage = " + precentage + "%");
  }
}
