// write a program subarray ?
#include <iostream>
using namespace std;
void printSubarrays(int *arr, int n)
{
    for (int start = 0; start < n; start++)
    {
        for (int end = start; end < n; end++)

        {
            // cout << "c" << start << "(" << endl<< ")";
                
            for (int i = start; i < end; i++)
            {
                cout << arr[i];
            }
            cout << ",";
        }
    }
}

int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    int n = 5;
    printSubarrays(arr, n);
    return 0;
}