# `의성마늘먹고 사람된 곰` - `{{ 다시 }}`

해커그라운드 해커톤에 참여하는 `의성마늘먹고 사람된 곰` 팀의 `{{ 다시 }}`입니다.

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
1. 애저 계정 만들기
2. node.js 깔기
3. git 깔기
4. 



## 시작하기

1. 해커그라운드 깃허브의 hg-garlic리포지토리에서 <>code라고 적혀있는 초록색 버튼을 누른다![image](https://github.com/user-attachments/assets/2b90b56e-5fe4-4002-8553-7c49833207f4)


2. Local메뉴에서 clone 방법 중 HTTPS를 선택하고, HTTPS글씨 바로 아래에 생기는 url을 복사합니다![image](https://github.com/user-attachments/assets/8243cb16-6763-401a-b918-5016ab504537)

3. 터미널을 통해 폴더를 열고, 해당 폴더 안에서 git clone ‘복사한 url 붙여넣기’를 통해 리포지토리를 클론합니다.![image](https://github.com/user-attachments/assets/639fb6cd-b13f-4228-9248-3189655ece9e)

4. Azure 포털에 접속: 웹 브라우저를 열고 [Azure 포털](https://portal.azure.com/)에 접속합니다.![image](https://github.com/user-attachments/assets/8ca3cedc-d3e7-478f-a874-2f8d2129ec17)

5. **로그인**: Azure 계정으로 로그인합니다.![image](https://github.com/user-attachments/assets/afb3ec47-34e0-4006-91b7-3d5954976cec)

6. Azure 홈 화면의 왼쪽 상단의 옵션바를 클릭하고, 리소스 그룹을 선택합니다![image](https://github.com/user-attachments/assets/bc3a026a-dafe-4a3b-ad12-78aa9e6f1183)


7. 여러 리소스 그룹 중 rg-garlicBear를 찾아 클릭합니다![image](https://github.com/user-attachments/assets/4b800e2d-5b97-4507-af75-423c63f7b369)

8. *”+만들기"**를 클릭합니다. 상단에 위치한 메뉴바에 있습니다.![image](https://github.com/user-attachments/assets/f50335cb-d15e-4131-85f2-a084f9f7fdb9)

9. **웹앱 선택**: 검색창에 **"웹앱"**을 입력하고, **"Web App for Containers”**박스의 하단에 있는 만들기를 선택합니다. 만들기 버튼의 바로 아래 생기는 Web App for Containers를 누릅니다![image](https://github.com/user-attachments/assets/928fe262-0b23-4b2c-9bd1-a5738e94ac4d)

10. 구독은 Hackers Ground, 리소스 그룹은 rg-garlicBear, 이름은 다른 리소스와 중복되지 않게 합니다(예: testwabapp)![image](https://github.com/user-attachments/assets/b31cb994-5478-4963-b3e4-3a6637632cca)

11. 만약 화면 상단에 경고창이 뜨며 권한이 필요하다고 할 시에는 클릭하여 설정을 통해 해당 권한을 허용해줍니다.
12. 배포란에서 깃허브 그룹을 해커그라운드로 설정해주고, 아래의 란은 rg-garlicBear를 선택합니다
13. **화면 좌측 하단의** **“검토+만들기"** 버튼을 클릭합니다.![image](https://github.com/user-attachments/assets/657a0e7f-5681-49c3-9733-fe50c4f6c715)

14. 그 다음 **화면 좌측 하단 ‘만들기’ 버튼을 클릭합니다**![image](https://github.com/user-attachments/assets/89fb6afc-9101-43e2-83a5-488b64dfde4f)

15. **배포가 완료된 것을 확인합니다**![image](https://github.com/user-attachments/assets/fe63bbf3-4aa0-4496-addb-b052b3e3961a)



1. 검색창에서 터미널 검색
2. git clone https://github.com/Azure-Samples/msdocs-python-flask-webapp-quickstart입력
3. cd msdocs-python-flask-webapp-quickstart입력
4. python3 -m venv .venv입력
5. source .venv/bin/activate입력
6.pip install -r requirements.txt입력
7. flask run을 입력한 후 컨트롤 + c를 눌러 끈다
8. az login입력 후(이메일 jhstl1203@gmail.com)비번(amgfaa289!@)
9. az webapp up --runtime PYTHON:3.9 --sku B1 --logs입력
10. The webapp ‘garlicweb’ doesn't exist
Creating Resource group ‘rg’-garlicBear ...
Resource group creation complete
Creating AppServicePlan 'garlicweb' ...
Creating webapp 'garlicweb’ ...
Configuring default logging for the app, if not already enabled
Creating zip with contents of dir /home/cephas/myExpressApp ...
Getting scm site credentials for zip deployment
Starting zip deployment. This operation can take a while to complete ...
Deployment endpoint responded with status code 202
You can launch the app at http://garlicweb.azurewebsites.net
입력
11. git remote add azure <Azure에서 제공한 Git URL>
git add .
git commit -m "Initial commit"
git push azure master를 차례대로 입력한다
12. url을 복사한다. 
13. 앱으로 이동하여 복사한 url을 붙여 넣는다.
