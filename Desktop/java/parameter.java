import java.util.*;

public class parameter

{
    public static void calculatesum(int num1, int num2) {
        System.out.println(" the first number " + num1);
        System.out.println(" the second number :" + num2);
        int sum = num1 + num2;

        System.out.println(" the sum is :" + sum);

    }

    public static void main(String[] args) {
        Scanner Sc = new Scanner(System.in);
        int a = Sc.nextInt();
        int b = Sc.nextInt();
        calculatesum(a, b);

    }
}
