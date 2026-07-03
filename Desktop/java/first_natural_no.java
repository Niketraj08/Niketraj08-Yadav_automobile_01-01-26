import java.util.Scanner;

public class first_natural_no {
    public static void main(String[] args) {
        try (Scanner scan = new Scanner(System.in)) {
            int n = scan.nextInt();
            int i = 1;
            int sum = 0;
            while (i <= n) {
                sum += i;
                i++;
            }
            System.out.println("the sum is : " + sum);
        }
    }
}
