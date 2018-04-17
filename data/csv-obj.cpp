#include <fstream>
#include <vector>
using namespace std;

struct bldg {
	string name;
	vector<vector<int>> eMonths;
	vector<int> eTotals;
	vector<vector<int>> gMonths;
	vector<int> gTotals;
	int total;
};

int main(int argc, char* argv[]) {
	ifstream file ("data.csv");
	ostream oFile ("out.json");
	if ( file.is_open() )
	{
		string line;
		bool open;
		while ( getline (file,line) )
		{
			if ( line.find("hall") != npos || line.find("bldg") != npos)
			{
				
			}
		}
	}
}
