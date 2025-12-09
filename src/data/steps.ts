import { Step } from "@/components/StepCard";

export interface InstallationGuide {
  preNote: {
    title: string;
    notes: string[];
  };
  steps: Step[];
}

export const windowsWslGuide: InstallationGuide = {
  preNote: {
    title: "Windows에서 설치하기 전에",
    notes: [
      "이 가이드는 <strong>Windows 10 또는 11, 64비트</strong> 기준입니다.",
      "설치 중에는 PC를 한두 번 <strong>재부팅</strong>해야 할 수 있습니다.",
      "아래 단계를 <strong>1번부터 순서대로</strong> 따라 해 주세요.",
    ],
  },
  steps: [
    {
      number: 1,
      title: "WSL(Windows Subsystem for Linux) 설치",
      description:
        "WSL은 윈도우 안에서 리눅스 터미널을 사용할 수 있게 해주는 기능입니다. 먼저 WSL을 설치해 리눅스 환경(Ubuntu)을 준비합니다.",
      instructions: [
        '화면 왼쪽 아래 <strong>검색창</strong>에 <code>PowerShell</code>을 입력합니다.',
        '검색 결과에서 <code>Windows PowerShell</code>을 <strong>마우스 오른쪽 버튼</strong>으로 클릭하고, <code>관리자 권한으로 실행</code>을 선택합니다.',
        '파란색 창이 열리면, 아래 명령어를 그대로 복사해 붙여넣고 <strong>Enter</strong> 키를 누릅니다.',
      ],
      codeBlocks: [{ code: "wsl --install" }],
      alerts: [
        {
          variant: "info",
          message:
            "명령 실행 후 설치가 진행되며, 안내에 따라 컴퓨터를 재부팅해 주세요. 재부팅 후 첫 실행 시 Ubuntu 설치 화면이 자동으로 나타날 수 있습니다.",
        },
      ],
      troubleshooting: {
        title: "WSL 설치가 안 될 경우",
        description: "위 명령어가 작동하지 않거나 오류가 발생하면, 아래 단계를 따라 WSL 기능을 수동으로 활성화해 주세요.",
        steps: [
          {
            instruction: "<strong>WSL 기능 활성화</strong> - PowerShell(관리자)에서 아래 두 명령어를 순서대로 실행합니다.",
            code: "dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart",
          },
          {
            instruction: "둘 다 <strong>성공 메시지</strong>가 나오면 <strong>컴퓨터를 재부팅</strong>합니다.",
          },
          {
            instruction: "재부팅 후 다시 PowerShell(관리자)을 열고, WSL이 인식되는지 확인합니다.",
            code: "wsl --status",
          },
          {
            instruction: "WSL이 인식되면 설치 명령어를 다시 실행합니다. (Ubuntu가 자동 설치되며, 다시 재부팅이 필요할 수 있습니다.)",
            code: "wsl --install",
          },
        ],
      },
    },
    {
      number: 2,
      title: "Ubuntu 설치 및 계정 만들기",
      description:
        "WSL 위에서 돌아가는 리눅스 배포판인 Ubuntu를 설치합니다.",
      instructions: [
        '재부팅 후, 만약 자동으로 <strong>Ubuntu 창</strong>이 뜨면 그대로 기다립니다. 자동으로 뜨지 않으면 <strong>시작 메뉴</strong>에서 <code>Ubuntu</code>를 검색해 실행합니다.',
        '<code>Installing, this may take a few minutes...</code> 라는 문구가 보이면 설치가 진행 중이니 기다립니다.',
        '<code>Enter new UNIX username:</code> 이라는 문장이 나타나면, 영문 소문자로 원하는 이름을 입력합니다. (예: <code>jun</code>, <code>shop2world</code>)',
        '비밀번호를 두 번 입력합니다. <em>화면에 글자가 보이지 않아도 정상입니다.</em>',
      ],
      codeBlocks: [],
      alerts: [
        {
          variant: "warning",
          message:
            "앞으로 나오는 모든 명령어는 이 Ubuntu 창(검정 또는 보라색 터미널)에서 입력해야 합니다.",
        },
      ],
    },
    {
      number: 3,
      title: "Node.js와 npm 설치",
      description:
        "Claude Code는 Node.js 기반 도구이므로, 먼저 Node.js와 패키지 관리자 npm을 설치합니다.",
      instructions: [
        "Ubuntu 터미널에서 아래 명령어를 순서대로 한 줄씩 입력하고, 각 줄마다 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [
        { code: "sudo apt update", description: "패키지 목록 업데이트:" },
        { code: "sudo apt install -y nodejs npm", description: "Node.js와 npm 설치:" },
        { code: "node -v\nnpm -v", description: "설치 확인:" },
      ],
      alerts: [
        {
          variant: "info",
          message:
            "각 명령을 실행했을 때 'v18.0.0'처럼 v로 시작하는 숫자가 나오면 정상 설치된 것입니다.",
        },
      ],
    },
    {
      number: 4,
      title: "Claude Code 설치",
      description: "이제 Claude Code CLI를 전역(global)으로 설치합니다.",
      instructions: [
        "Ubuntu 터미널에서 아래 명령어를 입력하고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [{ code: "npm install -g @anthropic-ai/claude-code" }],
      alerts: [
        {
          variant: "warning",
          message:
            "설치 중에 'EACCES' 또는 'permission denied' 같은 권한 오류가 나면, 아래처럼 앞에 sudo를 붙여 다시 실행해 주세요.",
        },
      ],
      alternativeCode: {
        description: "권한 오류 시 대체 명령어:",
        code: "sudo npm install -g @anthropic-ai/claude-code",
      },
    },
    {
      number: 5,
      title: "설치가 잘 되었는지 확인",
      description: "마지막으로 Claude Code가 제대로 설치되었는지 확인합니다.",
      instructions: [
        "아래 명령어를 입력하고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [{ code: "claude --version" }],
      alerts: [
        {
          variant: "success",
          message:
            "버전 정보(예: claude 1.2.3)가 표시되면, Windows(Ubuntu)에서 Claude Code 설치가 완료된 것입니다!",
        },
        {
          variant: "warning",
          message:
            "만약 'command not found: claude' 같은 메시지가 나온다면, 설치가 제대로 되지 않은 것입니다. 이 화면을 캡처해 운영진/멘토에게 공유해 주세요.",
        },
      ],
    },
  ],
};

export const windowsNativeGuide: InstallationGuide = {
  preNote: {
    title: "Windows에서 설치하기 전에 (네이티브 방식)",
    notes: [
      "이 가이드는 <strong>Windows 10 또는 11, 64비트</strong> 기준입니다.",
      "WSL 없이 Windows에서 직접 설치하는 <strong>가장 간단한 방식</strong>입니다.",
      "아래 단계를 <strong>1번부터 순서대로</strong> 따라 해 주세요.",
    ],
  },
  steps: [
    {
      number: 1,
      title: "PowerShell 관리자 권한으로 실행",
      description:
        "명령어를 입력할 PowerShell을 관리자 권한으로 실행합니다.",
      instructions: [
        '화면 왼쪽 아래 <strong>검색창</strong>에 <code>PowerShell</code>을 입력합니다.',
        '검색 결과에서 <code>Windows PowerShell</code>을 <strong>마우스 오른쪽 버튼</strong>으로 클릭하고, <code>관리자 권한으로 실행</code>을 선택합니다.',
        '"이 앱이 디바이스를 변경할 수 있도록 허용하시겠어요?" 라는 창이 뜨면 <strong>예</strong>를 클릭합니다.',
      ],
      codeBlocks: [],
      alerts: [
        {
          variant: "warning",
          message:
            "반드시 '관리자 권한으로 실행'을 선택해야 합니다. 일반 실행으로는 설치가 제대로 되지 않을 수 있습니다.",
        },
      ],
    },
    {
      number: 2,
      title: "Node.js 설치",
      description:
        "Windows 패키지 관리자(winget)를 사용해 Node.js를 설치합니다.",
      instructions: [
        "PowerShell(관리자) 창에서 아래 명령어를 복사해 붙여넣고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [{ code: "winget install OpenJS.NodeJS.LTS" }],
      alerts: [
        {
          variant: "info",
          message:
            "설치 중 약관 동의를 묻는 메시지가 나오면 'Y'를 입력하고 Enter를 누르세요. 설치가 완료되면 PowerShell을 닫았다가 다시 관리자 권한으로 열어주세요.",
        },
      ],
    },
    {
      number: 3,
      title: "Claude Code 설치",
      description: "npm을 사용해 Claude Code CLI를 전역으로 설치합니다.",
      instructions: [
        "새로 연 PowerShell(관리자) 창에서 아래 명령어를 입력하고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [{ code: "npm install -g @anthropic-ai/claude-code" }],
      alerts: [
        {
          variant: "info",
          message:
            "설치에 1~2분 정도 소요될 수 있습니다. 완료될 때까지 기다려주세요.",
        },
      ],
    },
    {
      number: 4,
      title: "설치가 잘 되었는지 확인",
      description: "마지막으로 Claude Code가 제대로 설치되었는지 확인합니다.",
      instructions: [
        "아래 명령어를 입력하고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [{ code: "claude --version" }],
      alerts: [
        {
          variant: "success",
          message:
            "버전 정보(예: claude 1.2.3)가 표시되면, Windows에서 Claude Code 설치가 완료된 것입니다!",
        },
        {
          variant: "warning",
          message:
            "만약 'command not found' 또는 인식되지 않는 명령어라는 메시지가 나온다면, PowerShell을 닫았다가 다시 열고 시도해 주세요. 그래도 안 되면 이 화면을 캡처해 운영진/멘토에게 공유해 주세요.",
        },
      ],
    },
  ],
};

export const macosGuide: InstallationGuide = {
  preNote: {
    title: "macOS에서 설치하기 전에",
    notes: [
      "이 가이드는 <strong>macOS 12 Monterey 이상</strong>을 기준으로 작성되었습니다. 그 이하 버전에서도 대부분 동일하게 동작하지만, 화면이 조금 다를 수 있습니다.",
      "아래 단계를 <strong>1번부터 순서대로</strong> 따라 해 주세요.",
    ],
  },
  steps: [
    {
      number: 1,
      title: "터미널 열기 & Homebrew 설치",
      description:
        "Homebrew는 macOS용 프로그램 설치 도구입니다. Node.js를 쉽게 설치하기 위해 먼저 Homebrew를 설치합니다.",
      instructions: [
        '키보드에서 <code>⌘(Command) + Space</code>를 눌러 <strong>Spotlight 검색</strong>을 엽니다.',
        '<code>터미널</code> 또는 <code>Terminal</code>을 입력하고, 나오는 <strong>터미널 앱</strong>을 실행합니다.',
        '터미널 창이 열리면, 아래 명령어 전체를 복사해 붙여넣고 <strong>Enter</strong>를 누릅니다.',
      ],
      codeBlocks: [
        {
          code: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
        },
      ],
      alerts: [
        {
          variant: "info",
          message:
            "설치 과정에서 암호를 입력하라는 문구가 나오면, 사용 중인 맥의 로그인 비밀번호를 입력하고 Enter를 눌러 주세요. 설치에는 몇 분 정도 걸릴 수 있습니다. 설치가 끝난 후에는 터미널을 한 번 닫았다가 다시 열어 주세요.",
        },
      ],
    },
    {
      number: 2,
      title: "Node.js 설치",
      description: "Homebrew로 Node.js를 설치합니다.",
      instructions: [
        "새 터미널 창에서 아래 명령어를 입력하고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [
        { code: "brew install node", description: "Node.js 설치:" },
        { code: "node -v\nnpm -v", description: "설치 확인:" },
      ],
      alerts: [
        {
          variant: "info",
          message:
            "각 명령을 실행했을 때 'v18.0.0'처럼 v로 시작하는 숫자가 나오면 정상 설치된 것입니다.",
        },
      ],
    },
    {
      number: 3,
      title: "Claude Code 설치",
      description: "npm을 사용해 Claude Code CLI를 전역으로 설치합니다.",
      instructions: [
        "터미널에서 아래 명령어를 입력하고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [{ code: "npm install -g @anthropic-ai/claude-code" }],
      alerts: [
        {
          variant: "warning",
          message:
            "권한 관련 오류가 나면, 아래 명령어로 다시 시도해 주세요.",
        },
      ],
      alternativeCode: {
        description: "권한 오류 시 대체 명령어:",
        code: "sudo npm install -g @anthropic-ai/claude-code",
      },
    },
    {
      number: 4,
      title: "설치가 잘 되었는지 확인",
      description:
        "아래 명령어를 실행해 Claude Code 버전이 정상적으로 표시되는지 확인합니다.",
      instructions: [
        "터미널에서 아래 명령어를 입력하고 <strong>Enter</strong>를 누릅니다.",
      ],
      codeBlocks: [{ code: "claude --version" }],
      alerts: [
        {
          variant: "success",
          message:
            "버전 정보가 표시되면, macOS에서 Claude Code 설치가 완료된 것입니다!",
        },
        {
          variant: "warning",
          message:
            "만약 'command not found: claude' 같은 메시지가 나온다면, 설치 경로 설정이 필요할 수 있습니다. 이 화면을 캡처해 운영진/멘토에게 공유해 주세요.",
        },
      ],
    },
  ],
};
