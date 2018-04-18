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
	
	bool kwh = false;
	bool natGas = false;
	int counter = 0;
	
	if ( file.is_open() )
	{
		file << "{\n\t\"buildings\": [\n\t\t";
		while ( getline (file,line) )
		{
			if ( line.find("SQFEET") != npos )
			{
				int cc = 0;
				string bldg = "{\n\t\t\t\"name\": "
				for (string::iterator i=line.begin(); i!=line.end(); ++i)
				{
					if ( cc == 2 ) bldg.append((string)(*i));
					if ( *i == ',' ) ++cc;
				}
				bldg.append(",\n\t\t\t");
				file << bldg;
				
			}
			if ( kwh && counter>0 && counter%2 == 0 )
			{
				
			}
			if ( natGas && counter>0 && counter%2 == 0 )
			{
				
			}
			if ( line.find("KWH") != npos )
			{
				file << "\"KWH\": [\n\t\t\t\t";
				kwh = true;
				++counter;
			}
			if ( line.find("CCF") != npos )
			{
				file << "\"CCF\": [\n\t\t\t\t";
				natGas = true;
				++counter;
			}
		}
	}
}
