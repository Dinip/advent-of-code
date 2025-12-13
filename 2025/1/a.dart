import '../common.dart';

void main() {
  int value = 50;
  int numberOfZeros = 0;

  for (final line in AoC.readInput()) {
    int multiplier = 1;
    if (line.startsWith('L')) multiplier = -1;

    final dirVal = int.parse(line.substring(1)) * multiplier;
    value = (value + dirVal) % 100;

    if (value == 0) numberOfZeros++;
    print('$line: $value');
  }
  print('Number of zeros: $numberOfZeros');
}
