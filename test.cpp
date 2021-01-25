#include <cmath>

extern "C" {
    double sum(int first, int last) {
        double s = 0;
        for (int number = first; number <= last; ++number) {
            s += sqrt(number);
        }
        return s;
    }
}
