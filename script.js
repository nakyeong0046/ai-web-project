<script>
  function showIdea(type) {
    const ideas = {
      field: [
        "교정 현장 내 수용자 갈등 상황 대응 시나리오 구성",
        "교정 시설 안전 관리를 위한 위험 요소 분석 아이디어",
        "교도관의 현장 판단력을 높이기 위한 사례 기반 학습"
      ],
      exam: [
        "교정학 핵심 개념 요약 학습 계획 수립",
        "출제 빈도가 높은 법령 중심 정리 전략",
        "AI를 활용한 오답 유형 분석 아이디어"
      ],
      interview: [
        "교도관 면접 대비 상황형 질문 생성 및 답변 연습",
        "직무 이해도를 보여줄 수 있는 사례 정리",
        "면접에서 활용 가능한 핵심 키워드 정리"
      ]
    };

    const selectedIdeas = ideas[type];
    const randomIdea = selectedIdeas[Math.floor(Math.random() * selectedIdeas.length)];
    document.getElementById("aiResult").innerText = randomIdea;
  }
</script>
