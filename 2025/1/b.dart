import '../common.dart';

void main() {
  int value = 50;
  int numberOfZeros = 0;

  for (final line in AoC.readInput()) {
    int multiplier = 1;
    if (line.startsWith('L')) multiplier = -1;

    final val = int.parse(line.substring(1));

    for (int i = 0; i < val; i++) {
      value += multiplier;
      if (value % 100 == 0) {
        print("Crossed 0");
        numberOfZeros++;
      }
    }

    value = value % 100;
    print('$line: $value');
  }
  print('Number of zeros: $numberOfZeros');
}
