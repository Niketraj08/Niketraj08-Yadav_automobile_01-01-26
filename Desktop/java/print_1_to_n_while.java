import java.util.Scanner;

public class print_1_to_n_while {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int n = sc.nextInt();
            int a = 1;
            while (a <= n) {
                System.out.println(a);
            a++;
            }
        }
    }
}
