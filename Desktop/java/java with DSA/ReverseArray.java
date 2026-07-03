public class ReverseArray {

    public static void main(String[] args) {
        // Original array
        int[] originalArray = {1, 2, 3, 4, 5};

        // Reverse the array using a new array
        int[] reversedArray = reverseArray(originalArray);
 
        // Print the reversed array
        System.out.print("Reversed array: ");
        for (int num : reversedArray) {
            System.out.print(num + " ");
        } 
    }

    // Method to reverse array by creating a new array
    public static int[] reverseArray(int[] arr) {
        int length = arr.length;
        int[] newArr = new int[length];

        for (int i = 0; i < length; i++) {
            newArr[i] = arr[length - 1 - i];
        }

        return newArr;
    }
}
