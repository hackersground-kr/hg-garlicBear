# `마늘먹고 사람된 곰` - `{{ 제품/서비스 이름 }}`

해커그라운드 해커톤에 참여하는 `마늘먹고 사람된 곰` 팀의 `{{ 제품/서비스 이름 }}`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**
>
> 1) 애저에 가입하기
먼저, 애저 웹사이트에 가서 계정을 만들고 로그인해요. 이때 부모님이나 선생님과 함께 하는 것이 좋아요.

2) 새로운 애플리케이션 만들기
로그인한 후, 애저 포털(대시보드)에서 "새 리소스 만들기" 버튼을 클릭해요. 여기서 우리가 배포할 소프트웨어를 위한 '앱 서비스'라는 것을 만들어요. 앱 서비스는 인터넷에 소프트웨어를 올릴 수 있는 공간이에요.

3) 프로그램 올리기
이제 우리가 만든 프로그램을 애저에 올려야 해요. 예를 들어, 마이크로소프트 소프트웨어를 파일 형태로 컴퓨터에 가지고 있다면, 이 파일을 애저에 업로드하면 돼요.

4) 인터넷에서 사용 가능하게 하기
프로그램을 업로드하면, 애저는 이 프로그램을 인터넷에 올려서 다른 사람들이 사용할 수 있도록 해줘요. 이렇게 하면 친구들이나 다른 사람들이 인터넷 주소(예: www.example.com)를 통해 우리가 만든 소프트웨어를 사용할 수 있게 돼요.

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**
> 1. 애저 계정 만들기
마이크로소프트 계정: 애저를 사용하려면 먼저 마이크로소프트 계정이 필요해요. 부모님이나 선생님과 함께 마이크로소프트 계정을 만들고, 애저에 가입하세요.
애저 무료 계정: 처음 애저를 사용하는 경우, 애저에서 제공하는 무료 계정을 만들 수 있어요. 이 무료 계정으로 일정 기간 동안 무료로 애저 서비스를 사용할 수 있어요.
2. 소프트웨어 준비
배포할 프로그램: 먼저, 배포할 소프트웨어나 프로그램을 준비해야 해요. 이 프로그램은 이미 만들어진 것일 수도 있고, 직접 만든 간단한 웹사이트나 앱일 수도 있어요.
코드와 파일: 프로그램을 애저에 올리려면, 프로그램의 코드와 필요한 파일들을 정리해서 준비해요.
3. 개발 환경 준비
코딩 도구: 만약 직접 소프트웨어를 만든다면, 코드를 작성할 수 있는 도구가 필요해요. 예를 들어, Visual Studio Code 같은 프로그램이 있어요.
인터넷 연결: 애저는 인터넷을 통해 접근하는 서비스이기 때문에, 안정적인 인터넷 연결이 필요해요.
4. 애저 사용법 익히기
애저 포털 탐색: 애저 포털(애저 대시보드) 사용법을 미리 익혀두면 좋아요. 애저 포털은 애저의 모든 기능을 관리하는 웹사이트인데, 여기서 앱을 만들고, 설정하고, 모니터링할 수 있어요.
튜토리얼 따라하기: 애저 웹사이트나 유튜브에 있는 초보자용 튜토리얼을 따라해보면 애저 사용법을 쉽게 배울 수 있어요.
5. 배포 전략 정하기
웹사이트인지 앱인지 결정: 애저를 통해 배포할 소프트웨어가 웹사이트인지, 아니면 앱인지에 따라 배포 방법이 달라질 수 있어요. 웹사이트는 '웹 앱' 서비스를, 앱은 '앱 서비스'나 '가상 머신'을 사용할 수 있어요.
사용자 관리: 프로그램을 사용할 사람들이 많다면, 사용자를 관리하기 위한 설정(예: 로그인 시스템)을 고려해야 해요.
6. 비용 관리
예산 설정: 애저는 사용한 만큼 비용을 지불하는 시스템이에요. 무료 계정으로 시작하더라도, 어떤 기능은 유료일 수 있으니 사용 전에 부모님이나 선생님과 상의해서 예산을 설정하는 것이 좋아요.


## 시작하기

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
>
> 1) 애저 계정 만들기
먼저, 애저에 가입해야 해요. 부모님이나 선생님과 함께 애저 웹사이트에 가서 계정을 만드세요. 이 계정은 우리가 애저를 사용하는데 필요한 첫 번째 단계예요.

2) 웹앱 준비하기
우리의 웹앱(예: 간단한 웹사이트)이 이미 만들어져 있어야 해요. 웹앱이란 HTML, CSS, JavaScript 같은 코드를 사용해 만든 프로그램이에요. 준비된 웹앱 파일들을 컴퓨터에 잘 정리해 두세요.

3) 애저 포털 로그인하기
애저 포털은 애저의 대시보드 같은 곳이에요. 여기서 우리가 배포할 웹앱을 설정하고 관리할 수 있어요. 애저 계정으로 포털에 로그인하세요.

4) 새 웹앱 만들기
1. 새 리소스 만들기: 애저 포털에서 '리소스 만들기'를 클릭해요. 여기서 '웹앱(Web App)'을 선택해요.
2. 이름 짓기: 우리 웹앱의 이름을 정해야 해요. 이 이름은 인터넷 주소(URL)이 되니까 기억하기 쉬운 이름으로 짓는 게 좋아요. 예를 들어, mycoolwebapp.azurewebsites.net 같은 주소가 될 거예요.
3. 설정 완료: 웹앱을 어디에 올릴지, 어떤 언어(예: Python, Node.js)로 만들었는지를 선택하고 '만들기' 버튼을 눌러요.
5) 웹앱 배포하기
1. 파일 올리기: 준비한 웹앱 파일들을 애저에 올려야 해요. 포털에서 '배포 센터'로 가서 '파일 업로드' 방법을 선택해요. 그런 다음, 파일들을 업로드하면 돼요.
2. 배포 확인: 파일을 업로드하고 나면, 애저가 우리 웹앱을 인터넷에 올려줘요. 이제 웹브라우저에서 우리가 정한 주소(예: mycoolwebapp.azurewebsites.net)를 입력하면 웹앱이 보일 거예요!
6) 완료 후 점검하기
배포가 완료되면, 웹앱이 잘 작동하는지 확인하세요. 혹시 오류가 있으면, 애저 포털에서 수정할 수 있어요.

4. 배포 후 관리
웹앱이 잘 배포된 후에도, 새로운 기능을 추가하거나 수정할 때마다 애저에 다시 올릴 수 있어요. 애저 포털에서 웹앱의 성능을 모니터링하고, 필요하면 설정을 변경할 수 있어요.
