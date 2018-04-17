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
	string line;
	bool open;
	bool bldg;
	int ln = 0;
	int rln = 0;
	if ( file.is_open() )
	{
		while ( getline (file,line) )
		{
			if ( line.find("SQFEET") != npos )
			{
				int cc = 0;
				string bldg;
				for (string::iterator i=line.begin(); i!=line.end(); ++i)
				{
					if ( cc == 2 ) bldg.append((string)(*i));
					if ( *i == ',' ) ++cc;
				}
				
			}
		}
	}
}
