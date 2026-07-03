public class liner_serch {
    public static int linerserch(int number[], int key) {
        for (int i = 0; i < number.length; i++) {
            if (number[i] == key) {
                return 1;

            }
        }
        return -1;

    }

    public static void main(String[] args) {
        int numbers[] = { 2, 4, 6, 8, 12, 18 };
        int key = 12;
        int index = linerserch(numbers, key);
        if (index == -1) {
            System.out.println(" NOT FOUND ");
        } else {
            System.out.println("key is at index " + index);
        }
    }
}
