// RPG 게임에 1부터 N까지 번호가 하나씩 붙은 스킬 N 종류가 있습니다. 이때, 각 스킬을 배우는데 필요한 스킬 포인트를 정하려 합니다.

// 스킬에는 다음과 같이 상위 스킬과 선행 스킬이라는 개념이 있습니다.

// 상위 스킬 : 어떤 스킬을 배웠을 때 배울 수 있는 바로 다음 스킬

// 상위 스킬이 없는 최상위 스킬은 딱 하나만 있습니다.
// 최상위 스킬을 제외한 모든 스킬은 상위 스킬을 하나씩 가지고 있습니다.
// 선행 스킬 : 어떤 스킬을 배우기 위해 먼저 배워야 하는 스킬

// 선행 스킬이 없는 경우 스킬을 바로 배울 수 있습니다.
// 선행 스킬을 모두 배워야 현재 스킬을 배울 수 있습니다.
// 모든 스킬을 익히는데 필요한 스킬 포인트를 total_sp만큼으로 정했을 때, 각 스킬에 필요한 스킬 포인트를 다음 규칙에 따라 정하려 합니다.

// 어떤 스킬을 익히는데 필요한 스킬 포인트는 선행 스킬을 익히는데 필요한 스킬 포인트의 합입니다.
// 직접 연결된 선행 스킬의 포인트만 합하면 됩니다.
// 선행 스킬이 없는 스킬들을 익히는데 필요한 스킬 포인트는 모두 같습니다.
// 총 스킬 포인트 total_sp, 각 스킬의 상위 스킬을 담고 있는 배열 skills가 주어질 때, 각 스킬을 익히는데 필요한 스킬 포인트 배열을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// total_sp는 1 이상 1,000,000,000 이하인 자연수입니다.
// total_sp는 규칙에 맞게 정확히 분배할 수 있는 경우만 입력으로 주어집니다.
// 각 스킬을 익히는데 필요한 스킬 포인트는 자연수입니다.
// skills의 세로(행) 길이는 2 이상 100,000 이하이며, 스킬 개수(N)보다 1 작습니다.
// 예를 들어 skills의 세로(행) 길이가 10 이면 스킬 개수(N)는 11 입니다.
// skills의 원소는 [a, b]의 형태입니다.
// a와 b는 스킬 번호를 나타냅니다.
// (1 ≤ a, b ≤ N), (a ≠ b), a, b는 자연수
// 스킬 a는 스킬 b의 상위 스킬입니다(즉, b → a의 형태)
// 스킬 관계가 잘못 주어지는 경우는 없습니다.
// 1번 스킬이 항상 최상위 스킬인 것은 아님에 주의하세요.
// 배열의 첫 번째 원소부터 차례대로 스킬을 배우는데 필요한 스킬 포인트를 채워서 return 해주세요.
// return 배열의 i - 1번째 원소가 i번 스킬을 배우는데 필요한 스킬 포인트이어야 합니다.
// 입출력 예
// total_sp	skills	return
// 121	[[1, 2], [1, 3], [3, 6], [3, 4], [3, 5]]	[44, 11, 33, 11, 11, 11]
// 입출력 예 설명
// 예제 #1

// ex1_skill_tree.jpeg

// 위와 같이 스킬 포인트를 정하면 총 스킬 포인트가 121이 되며 조건을 만족합니다.