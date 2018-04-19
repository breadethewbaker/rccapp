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
	ofstream oFile ("out.json");
	string line;

	bool kwh = false;
	bool natGas = false;
	int counter = 0;

	if ( file.is_open() )
	{
		oFile << "{\n\t\"buildings\": {\n";
		while ( getline (file,line) )
		{
			if ( line.find("SQFEET") != string::npos )
			{
				int cc = 0;
				string bldg = "\t\t";
				for (string::iterator i=line.begin(); i!=line.end(); ++i)
				{
					if ( cc == 2 ) bldg += *i;
					if ( *i == ',' ) ++cc;
				}
				bldg.append(": {\n");
				oFile << bldg;
			}
			if ( kwh && counter%2 == 0 && counter < 26 )
			{

			}
			if ( natGas && counter%2 == 0 && counter < 26 )
			{

			}
			if ( line.find("KWH") != string::npos )
			{
				oFile << "\t\t\t\"KWH\": [\n";
				kwh = true;
				counter = 0;
			}
			if ( line.find("CCF") != string::npos )
			{
				oFile << "\t\t\t\"CCF\": [\n";
				natGas = true;
				counter = 0;
			}
			if ( line.find("Total Cost") != string::npos )
			{
				int cc = 0;
				string totals = "\t\t\t\"Total\": ";
				for (string::iterator i=line.begin(); i!=line.end(); ++i)
				{
					if ( cc == 4 ) totals += *i;
					if ( *i == ',' ) ++cc;
				}
				totals.append("\n\t\t}\n\t}\n}");
			}
			if ( counter == 26 )
			{
				int cc = 0;
				string totArr;
				if ( kwh ) totArr = "\t\t\t\"KWHtot\": [";
				else totArr = "\t\t\t\"CCFtot\": [";
				for (string::iterator i=line.begin(); i!=line.end(); ++i)
				{
					if ( cc == 2 || cc == 4 || cc == 5)
					{
						if ( *i != '\"') totArr += *i;
					}
					if ( *i == ',' ) ++cc;
				}
				totArr.pop_back();
				totArr.append("],\n");
				oFile << totArr;
				kwh = false;
				natGas = false;
			}
			++counter;
		}
	}
	file.close();
	oFile.close();
}
