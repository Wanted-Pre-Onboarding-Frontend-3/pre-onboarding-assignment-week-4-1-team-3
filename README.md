
# 원티드 프리온보딩 4주차 과제

### _WEEK 4-1 - 디셈버 앤 컴퍼니_

- 과제 목표 : 투자 관리 서비스의 관리자 기능 구현

- 수행 기간 : 2022/09/20 ~ 2022/09/25

<br>

# 배포 링크

- [링크](https://pre-onboarding-assignment-week-4-1-team-3-hsgj.vercel.app/)

<br>

# 목차

- [원티드 프리온보딩 4주차 과제](#원티드-프리온보딩-4주차-과제)
- [목차](#목차)
- [3팀 소개 및 역할](#3팀-소개-및-역할)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [과제 요건 및 구현 내용](#과제-요건-및-구현-내용)
  * [과제 요건](#과제-요건)
  * [데모 영상](#데모-영상)
  * [기능별 코멘트](#기능별-코멘트)
- [컨벤션 링크](#컨벤션-링크)

<br><br>

# 3팀 소개 및 역할

| 이름   | 역할                                     |
| ------ | ---------------------------------------- |
| 김리후 | 유저 목록 페이지 |
| 이경준 | 유저 상세 페이지 |
| 이혜성 | **팀장** / 배포, 계좌 목록 페이지 |
| 문선화 | 레이아웃, 로그인/로그아웃 |
| 홍성준 | 계좌 상세 페이지 |

<br><br>

# 기술 스택

- JavaScript, React, Recoil, React-Query

- Antd, Styled-components

- Json-server

<br><br>

# 프로젝트 구조

<details>

<summary>프로젝트 구조</summary>

```
📦src
 ┣ 📂api
 ┃ ┣ 📜api.js
 ┃ ┣ 📜axios-instance.js
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜usersApi.js
 ┣ 📂assets
 ┃ ┣ 📜logo.png
 ┃ ┗ 📜logo_white.png
 ┣ 📂components
 ┃ ┣ 📂Users
 ┃ ┃ ┣ 📜UserAddForm.jsx
 ┃ ┃ ┗ 📜UserAddInput.jsx
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┗ 📜Header.jsx
 ┣ 📂data
 ┃ ┣ 📜accountStatus.json
 ┃ ┣ 📜brokerFormat.json
 ┃ ┣ 📜brokers.json
 ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┃ ┗ 📜useFormat.js
 ┣ 📂pages
 ┃ ┣ 📂AccountDetail
 ┃ ┃ ┣ 📂bread-crumbs
 ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Account.jsx
 ┃ ┃ ┃ ┣ 📜AccountUser.jsx
 ┃ ┃ ┃ ┣ 📜style.js
 ┃ ┃ ┃ ┗ 📜UserSetting.jsx
 ┃ ┃ ┗ 📜AccountDetail.jsx
 ┃ ┣ 📂accounts
 ┃ ┃ ┣ 📜accounts.constants.js
 ┃ ┃ ┣ 📜accounts.jsx
 ┃ ┃ ┗ 📜accounts.utils.jsx
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜AuthRoute.jsx
 ┃ ┃ ┗ 📜Login.jsx
 ┃ ┣ 📂userdetail
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AccountListSection.jsx
 ┃ ┃ ┃ ┣ 📜common.js
 ┃ ┃ ┃ ┗ 📜UserInfoSection.jsx
 ┃ ┃ ┗ 📜UserDetail.jsx
 ┃ ┣ 📂Users
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜User.jsx
 ┃ ┃ ┃ ┣ 📜UserList.jsx
 ┃ ┃ ┃ ┣ 📜UserListPagination.jsx
 ┃ ┃ ┃ ┗ 📜UserMenu.jsx
 ┃ ┃ ┗ 📜Users.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂store
 ┃ ┣ 📜account.js
 ┃ ┣ 📜user.js
 ┃ ┗ 📜userList.js
 ┣ 📂utils
 ┃ ┣ 📜account.util.js
 ┃ ┣ 📜constants.js
 ┃ ┣ 📜formatUsersData.js
 ┃ ┗ 📜storage.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜App.test.js
 ┣ 📜index.jsx
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

</details>

<br><br>

# 과제 요건 및 구현 내용

## 과제 요건

### 1.  화면 구성
    -   로그인
    -   Header
    -   Footer
    -   Sider
    -   Content
        -   계좌 목록
        -   계좌 상세
        -   사용자 목록
        -   사용자 상세
  <br>
  
### 2.  레이아웃 구성
   ![https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png](https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png)

| 이름   | 설명                                  |
| ---------- | -------------------------------- |
| Header | 현재 보여지고 있는 페이지명과 로그인 사용자명을 보여줍니다. |
| Sider | 페이지 메뉴가 표시됩니다. |
| Footer |  Copyright © December and Company Inc. 가 가운데 정렬로 들어가면 됩니다. |
    
### 3.  메뉴 구성

| 이름   | 설명                                  |
| ----------- | ------------------------------- |
| 계좌 목록 | 계좌 목록이 보여집니다. |
| 계좌 상세 | 계좌 목록에서 특정 계좌를 누르면 계좌의 상세 정보가 보여집니다. 이 화면에서는 계좌명 수정 등의 작업이 가능해야 합니다. 계좌의 사용자명을 누르면 사용자 상세로 이동합니다. |
| 사용자 목록 | 사용자 목록이 보여집니다. |
| 사용자 상세 | 사용자 목록에서 사용자를 누르면 사용자의 상세 정보가 보여집니다. |
| 로그아웃 |  로그아웃 처리되고 로그인 화면으로 이동합니다. |

    
### 상세 요구사항
**[사용자 목록]**
    
    -   표기되어야 하는 정보
        -   고객명(name) : 가운데 글자 마스킹 필요, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기
            -   고객명을 누를 경우 사용자 상세화면으로 이동합니다.
        -   보유중인 계좌수(account_count) : (해당 API 호출 후 데이터를 정제하여 표기)
        -   이메일 주소 (email)
        -   주민등록상 성별코드 (gender_origin)
        -   생년월일 (yyyy-mm-dd) (birth_date)
        -   휴대폰 번호 (가운데 4자리 `***` 로 마스킹 필요) (phone_number)
        -   최근로그인 (last_login)
        -   혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)
        -   활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)
        -   가입일 (created_at)
    -   구현되어야 하는 기능
        -   목록에서는 활성화 여부, 임직원 계좌 여부를 필터링 할 수 있어야 합니다.
        -   리스트 페이지에서는 검색이 가능해야 합니다.
            -   `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
            -   예시 : GET [](http://localhost:3000/users?q=South)[http://localhost:3000/users?q=South](http://localhost:3000/users?q=South)
        -   페이지네이션이 되어야 합니다.
            -   `json-server` 의 Paginate API 를 사용하여 구현합니다.
            -   예시 : GET [](http://localhost:3000/users?%5C%5C_page=1&%5C%5C_limit=20)[http://localhost:3000/users?\\\\_page=1&\\\\_limit=20](http://localhost:3000/users?%5C%5C%5C%5C_page=1&%5C%5C%5C%5C_limit=20)
        -   임의로 신규 사용자를 추가할 수 있어야 합니다.
        -   잘못 생성한 사용자를 삭제할 수 있어야 합니다.
        -   개명을 한 사용자를 위해 사용자명을 변경할 수 있어야 합니다.
**[계좌 목록]**
    
    -   표기되어야 하는 정보
        -   고객명(user_name) : 고객ID 를 참조하여 실제 이름으로 보여져야 합니다.
            -   고객명을 누를 경우 사용자 상세화면으로 이동합니다.
        -   브로커명(broker_name) : 예시) OO증권, `brokers.json` 를 참조하여 실제 이름으로 보여져야 합니다.
        -   계좌번호(number) : 앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 `*` 글자로 마스킹 처리가 필요합니다.
        -   계좌상태(status) : 예시) 운용중, `accountStatus.json` 를 참조하여 실제 이름으로 보여져야 합니다.
        -   계좌명(name) : 계좌명입니다.
        -   평가금액(assets) : 예시) 123,123,123
        -   입금금액(payments) : 예시) 123,123,123
        -   계좌활성화여부(is_active) : 계좌 활성화 여부
        -   계좌개설일(created_at) :
    -   구현되어야 하는 기능
        -   목록에서는 브로커명, 계좌 활성화 여부, 계좌 상태를 필터링 할 수 있어야 합니다.
        -   리스트 페이지에서는 검색이 가능해야 합니다.
            -   `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
            -   예시 : GET [](http://localhost:3000/accounts?q=South)[http://localhost:3000/accounts?q=South](http://localhost:3000/accounts?q=South)
        -   페이지네이션이 되어야 합니다.
            -   `json-server` 의 Paginate API 를 사용하여 구현합니다.
            -   예시 : GET [](http://localhost:3000/accounts?%5C%5C_page=2&%5C%5C_limit=20)[http://localhost:3000/accounts?_page=2&_limit=20](http://localhost:3000/accounts?_page=2&_limit=20)
            - 
**[상세]**    

    -   각 사용자, 계좌의 상세 페이지는 획득 가능한 대부분의 정보를 표시해주시면 됩니다.
    
**[조건]**

    -   Sider 메뉴에서는 현재 보고 있는 화면에 해당하는 메뉴가 하이라이트 되어야 합니다.
    -   새로고침을 해도 로그인 상태가 유지되어야 하며, 상태에 따라 기존에 머무르던 화면이 그대로 보여야 합니다.
    -   계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.
    -   계좌 리스트에서 사용자 이름을 누르면 사용자 상세로 이동합니다.
    -   사용자 상세에서 사용자의 계좌목록이 보여야 합니다.
    -   계좌 목록에서 각 계좌 상태별로 필터링이 가능해야 합니다.
    -   수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색으로 보여줘야 합니다.
    -   계좌 목록에서 broker_id 에 해당하는 실제 브로커명 (OO투자증권) 이 보여야 합니다.
<br><br>

## 기능별 코멘트


### [ 사용자 목록 ]

  - 구현내용
    - **데이터 정제 및 마스킹** : 각 데이터를 불러와 조건에 맞는 uuid, user_id를 기준으로 데이터를 합친 최종 결과물로 마스킹 작업.
    - **페이지네이션** : 사용자 목록 데이터 api를 호출하며 limit(페이지 당 보여지는 데이터 개수), page 값을 지정하여 구현.
    - **필터링 기능** : 필터링 조건에 따라 api 호출을 하여 데이터를 받아온 후, 결과값을 정제 및 마스킹 처리.
    - **검색 기능** : api 호출로 해당 키워드가 있는 데이터를 받아온 후, 결과값을 정제 및 마스킹 처리. 검색 후 키워드 리셋.
    - **이름 수정 기능** : 수정 버튼 클릭 시, 해당되는 이름만 edit 모드로 변환, 수정된 데이터가 반영 되도록 구현.
    - **사용자 상세 이동 기능**: 이름 클릭 시 api에 id값을 넘겨주어  해당되는 상세 페이지로 이동 구현. 
    - **삭제 기능** : 삭제 버튼 클릭 시, 해당되는 데이터만 삭제되도록 구현.
    - **새로운 고객(임의 유저) 등록 기능** : 모달창으로 임의 유저의 기능을 등록하여 데이터 리스트에 반영되도록 구현. 등록 후 모달창 리셋.
    - **이전 데이터로 돌아가는 기능** : UX를 고려하여 기존 전체리스트를 볼 수 있도록 <- 버튼으로 기능 구현.
   
  - 논의내용
    - **필터링, 검색을 구현 방식** : 기존 데이터 정보를 활용하여 구현할지, api 호출을 이용할지 논의.
    - **혜택 수신 동의, 활성화 표현 방식** : 직관적으로 알아볼 수 있는 아이콘으로 표현.
    - **API 호출 방식** : react-query의 적절한 사용 논의(useQueries, useQuery의 옵션, useMutation 등)

<br><br>

### [ 사용자 상세 ]

  - 구현내용
  - 논의내용

<br><br>

### [ 유저 목록 ]
  
  - 구현내용
  - 논의내용

<br><br>

### [ 유저 상세 ]
  

  - 구현내용
  - 논의내용

<br><br>

### [ 레이아웃, 로그인 ]

  - 구현내용
  - 논의내용

<br><br>

# 컨벤션 링크

[링크](https://sunhwaday.notion.site/c0ff2ba4723c42a289ab9021e8aa95ba)
