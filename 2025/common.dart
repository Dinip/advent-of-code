import 'dart:io';

class AoC {
  static List<String> _readAndSplitFile(String path) {
    final file = File(path);
    final input = file.readAsStringSync();
    return input.split('\n');
  }

  static List<String> readExample1() => _readAndSplitFile('example.txt');

  static List<String> readExample2() => _readAndSplitFile('example2.txt');

  static List<String> readInput() => _readAndSplitFile('input.txt');
}
