let n = 8
for (let index = 1; index <= n; index++) {
    let output = ''
    for (let i = 1; i <= n - index; i++) {
        output += ' '
    }
    for (let j = 1; j <= 2 * index - 1; j++){
        output += 1
    }
    console.log(output);     
}
#include <iostream>
using namespace std;
 
int main()
{
    int soDong;
    cout << "Nhap so dong:";
    cin >> soDong;
    for(int i = 1; i <= soDong; i++) {
        for(int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}