import java.util.Scanner;

public class CBSE_marks {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("ENTER THE PHYSICS MARKS : ");
            int PHYSICS = sc.nextInt();

            System.out.println("ENTER THE MATHS  MARKS : ");
            int MATHS = sc.nextInt();

            System.out.println("ENTER THE ENGLISH  MARKS : ");
            int ENGLISH = sc.nextInt();

            System.out.println("ENTER THE CHEMISTRY  MARKS : ");
            int CHEMISTYR = sc.nextInt();

            System.out.println("ENTER THE  SCIENCE  MARKS : ");
            int SCIENCE = sc.nextInt();

            Float percentage = ((PHYSICS + MATHS + ENGLISH + CHEMISTYR + SCIENCE) / 500f) * 100;
            System.out.println(" percentage : ");
            System.out.println(percentage);
        }
    }
}
