#include<bits/stdc++.h>
using namespace std;
void reverseArray(stack<int> &s,int arr[],int n){
    for(int i=0;i<n;i++){
        s.push(arr[i]);
    }
    while(!s.empty()){
        cout<<s.top()<<" ";
        s.pop();
    }
}
int main(){
int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    stack<int> st;
    reverseArray(st, arr, 10);


    return 0;
}