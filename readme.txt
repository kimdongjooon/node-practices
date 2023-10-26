Node Practices

1. node 프로젝트(application, library) 만들기.
    1) 프로젝트생성: mkdir project-ex01 (mkdir로 디렉토리 생성)
    2) 프로젝트 이동: cd project-ex01 
    3) 프로젝트 초기화: 프로젝트 메니페스트 파일 (package.json)을 새성.
        [project-ex01]$ npm init -y
2. 패키지
    - 완전한 어플리케이션(babel, webpack, nodemon, Lint, ...)
    - 프로잭트에서 사용하는 라이브러리 모듈(module)
3. 의존성
    - 개발하는 프로젝트(어플리케이션, 라이브러리)에서 설치하는 패키지 
    - 일반 의존성: 개발하고 있는 프로젝트가 런타임때 사용하는 패키지로 꼭 빌드와 배포에 포함되어야 한다.
    - 개발 의존성: 개발에 필요하거나 고움이 되는 패키지로 빌드와 배포에 포함되지 않는다.
4. 패키지 설치
    - 전역설치
    - 지역설치
    - 패키지 설치
        $ npm i ejs [지역, 일반]
6. node 프로젝트 만들기.
7. 서버 프로그래밍 잠깐 맛보기.