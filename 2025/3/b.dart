import '../common.dart';

void main() {
  const maxDigits = 12;

  print(
    AoC.readInput().map((bank) {
      final batteries = bank.split('');
      final bestValues = <int>[];

      int startIdx = 0;
      for (int i = 0; i < maxDigits; i++) {
        final endIdx = batteries.length - (maxDigits - i - 1);

        final subList = batteries.sublist(startIdx, endIdx).map(int.parse);
        final maxDigit = subList.max();

        bestValues.add(maxDigit);

        startIdx = startIdx + subList.toList().indexOf(maxDigit) + 1;
      }

      return int.parse(bestValues.join(''));
    }).sum(),
  );
}
