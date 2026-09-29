#include <iostream>
#include<vector>
#include<climits>
#include<set>
#include<string>
#include<map>
#include<algorithm>
#include<cctype>
#include<queue>
using namespace std;

#define ll long long

void solve() {
    ll n,m; cin>>n>>m; vector<vector<ll>> nums(n,vector<ll> (m));
    for(ll i=0; i<n; i++){
        for(ll j=0; j<m; j++){
            cin>>nums[i][j];
        }
    }
    //print the element's of the array
    for(ll i=0; i<n; i++){
        for(ll j=0; j<m; j++){
            cout<<nums[i][j];
        }
        cout<<endl;
    }

    //cross diagonal printing :
    for(ll i=0; i<n; i++){
        for(ll j=0; j<m; j++){
            if(i==j || j==n-1-i){
                cout<<nums[i][j]<<" ";
            }
        }
        cout<<endl;
    }


    

}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    while(t--) {
        solve();
    }

    return 0;
}