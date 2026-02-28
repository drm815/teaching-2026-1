export const unitsGrade3 = [
    {
        id: 1,
        title: "정보 통신 기술의 세계",
        videoId: "er3v4PVNQqE", // The hidden network that makes the internet possible (TED-Ed, 4:25)
        description: "우리 삶의 신경망과 같은 정보 통신 기술의 개념과 발달 과정을 알아봅시다.",
        learningGoals: [
            "정보 통신 기술의 개념과 특징을 설명할 수 있다.",
            "정보 통신 기술의 발달 과정을 시대별로 구분할 수 있다.",
            "정보 통신 기술이 우리 생활에 미치는 영향을 이해한다."
        ],
        content: [
            {
                subtitle: "정보 통신 기술이란?",
                text: "정보 통신 기술(ICT)은 정보를 생성, 가공, 저장, 전송하는 데 필요한 모든 기술을 의미합니다. 단순히 데이터를 주고받는 것을 넘어, 현대 사회의 모든 산업을 연결하는 중추적인 역할을 합니다.",
                image: "/assets/learning/unit5_ict_overview.png"
            },
            {
                subtitle: "정보 통신 기술의 특징",
                text: "시간과 공간의 제약을 극복하게 해주며, 정보의 생산과 공유가 매우 빠릅니다. 또한 기존의 다른 기술들과 융합하여 자율주행차, 스마트 시티와 같은 새로운 가치를 창출합니다."
            },
            {
                subtitle: "통신의 발달 과정",
                text: "고대의 봉수, 파발에서 시작하여 전신, 전화의 발명, 그리고 현대의 인터넷과 5G 모바일 통신에 이르기까지 통신 기술은 비약적으로 발전해 왔습니다."
            }
        ],
        quiz: [
            {
                question: "정보 통신 기술은 오직 텍스트 정보만을 전달하는 기술이다.",
                answer: false,
                type: "ox",
                explanation: "소리, 이미지, 영상 등 모든 형태의 정보를 처리하고 전송합니다."
            },
            {
                question: "다음 중 현대 정보 통신 기술의 특징이 아닌 것은?",
                options: ["대량의 정보 처리", "실시간 소통", "융합성(Convergence)", "정보 전달의 시공간적 제약 증가"],
                answer: 3,
                type: "choice",
                explanation: "정보 통신 기술은 시공간적 제약을 최소화하는 방향으로 발전합니다."
            }
        ]
    },
    {
        id: 2,
        title: "정보 통신 기술 문제 해결",
        videoId: "QSIPNhOiMoE", // What is the Internet of Things? (IBM/TED-Ed, 3:39)
        description: "정보가 어떻게 전달되는지 통신 시스템의 원리를 이해하고 직접 설계해 봅시다.",
        learningGoals: [
            "정보 통신 시스템의 구성 요소(송신, 전송 매체, 수신 등)를 이해한다.",
            "통신 방식의 종류와 특징을 비교할 수 있다.",
            "주어진 문제를 해결하기 위한 통신 시스템을 설계할 수 있다."
        ],
        content: [
            {
                subtitle: "정보 통신 시스템의 구성",
                text: "정보 발생원(송신자) -> 부호화 -> 전송 매체 -> 복호화 -> 정보 수신처(수신자)의 단계를 거칩니다. 이 과정에서 '소음(Noise)'은 정보 전달을 방해하는 요소가 됩니다.",
                image: "/assets/learning/unit5_communication_system.png"
            },
            {
                subtitle: "전송 매체의 종류",
                text: "유선 매체에는 트위스트 페어, 동축 케이블, 광섬유 케이블이 있으며, 무선 매체에는 전파(Radio Wave)가 사용됩니다. 특히 광섬유는 대용량 정보를 매우 빠르게 전달합니다."
            }
        ],
        activity: {
            title: "나만의 통신 시스템 설계하기",
            description: "특정한 상황(예: 재난 상황, 우주 기지 통신)에서 정보를 안전하고 확실하게 전달할 수 있는 시스템을 구상해 봅시다.",
            steps: [
                "해결해야 할 통신 상황 설정 (누가, 누구에게, 무엇을?)",
                "정보의 형태 정의 (텍스트, 음성, 영상 등)",
                "최적의 전송 매체와 방식 선택하기",
                "시스템 구성도를 그림으로 표현하고 발표하기"
            ]
        },
        quiz: [
            {
                question: "정보 전송 중 원래의 신호를 변형시키거나 방해하는 요소를 무엇이라고 하나요?",
                answer: "잡음",
                type: "short",
                explanation: "잡음(Noise)은 신호의 품질을 저하시키는 불필요한 신호입니다."
            }
        ]
    },
    {
        id: 3,
        title: "스마트한 정보 통신",
        videoId: "0yCJMt9Mx9c", // How does artificial intelligence learn? (TED-Ed, 5:00)
        description: "인공지능, 사물 인터넷 등 미래를 이끌 기술을 배우고 올바른 활용 문화를 고민합니다.",
        learningGoals: [
            "사물 인터넷(IoT)과 인공지능(AI)의 개념을 이해한다.",
            "빅데이터가 정보 통신 사회에 미치는 영향을 설명할 수 있다.",
            "인공지능 시대의 윤리적 쟁점을 파악하고 올바른 태도를 가진다."
        ],
        content: [
            {
                subtitle: "초연결 사회의 실현",
                text: "모든 사물이 인터넷으로 연결되는 IoT와 방대한 데이터를 분석하는 빅데이터, 그리고 스스로 학습하는 AI가 만나 우리 삶을 더 스마트하게 변화시키고 있습니다.",
                image: "/assets/learning/unit5_smart_tech.png"
            },
            {
                subtitle: "인공지능 윤리",
                text: "AI가 인간의 편의를 돕기도 하지만, 편향된 데이터 학습, 개인정보 침해, 책임 소재 문제 등 새로운 윤리적 과제를 던져주고 있습니다. 우리는 기술을 비판적으로 수용할 줄 알아야 합니다."
            }
        ],
        activity: {
            title: "인공지능 윤리 가이드라인 제안",
            description: "우리 학교에서 인공지능(예: ChatGPT)을 올바르게 사용하기 위해 지켜야 할 3가지 원칙을 세워봅시다.",
            steps: [
                "AI 활용 시 발생할 수 있는 문제점 토론",
                "학교 현장에 맞는 실질적인 보완책 구상",
                "간결하고 명확한 3대 수칙 작성 및 공유"
            ]
        },
        quiz: [
            {
                question: "인공지능은 학습하는 데이터에 따라 편향된 결과를 낼 수 있다.",
                answer: true,
                type: "ox",
                explanation: "데이터 자체가 편향되어 있다면 AI 역시 편향된 결론을 내릴 수 있습니다."
            },
            {
                question: "모든 사물이 인터넷에 연결되어 정보를 주고받는 기술을 무엇이라고 하나요?",
                answer: "사물인터넷",
                type: "short",
                explanation: "IoT(Internet of Things)는 사물 간의 지능형 통신을 가능하게 합니다."
            }
        ]
    }
];
