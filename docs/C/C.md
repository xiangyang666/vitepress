# C语言

## 格式化输出字符

> http://www.atmcu.com/1127.html

``` c
%d 十进制有符号整数
%u 十进制无符号整数
%x 以十六进制表示的整数
%o 以八进制表示的整数
%f float型浮点数
%lf double 型浮点数
%e 指数形式的浮点数
%s 字符串
%c 单个字符
%p 指针的值
    
// 特殊应用
%3d   要求宽度为3位，如果不足3位，前面空格补齐；如果足够3位，此语句无效
%03d   要求宽度为3位，如果不足3位，前面0补齐；如果足够3位，此语句无效
%-3d   要求宽度为3位，如果不足3位，后面空格补齐；如果足够3位，此时语句无效
%.2f   小数点后只保留2位 
    
```



## 运算符

## 控制语句

### 选择控制语句

``` c
if (条件表达式) {
	
} else {

}
```

``` c
// 示例：
char score = 88;

if (score < 0 || score > 100) {
	printf("不合法的分数");
} else if (score < 60) {
	printf("不及格");
} else if (score < 70) {
	printf("及格");
} else if (score < 80) {
	printf("良好");
} else if (score <= 100) {
	printf("优秀~~~");
} else {
	printf("Hello World");
}
```



### switch

+ switch  表达式只能是字符型或整型的（short int int long int）

``` c
// 示例1
int n;
printf("请输入1~7的数字\n");
scanf_s("%d", &n);

switch (n) {
case 1:
	printf("星期一\n");
	break;
case 2:
	printf("星期二\n");
	break;
case 3:
	printf("星期三\n");
	break;
case 4:
	printf("星期四\n");
	break;
case 5:
	printf("星期五\n");
	break;
case 6:
	printf("星期六\n");
	break;
case 7:
	printf("星期天\n");
	break;
default:
	//printf("输入的值不合法");
	printf("您输入的n有误，请输入一个1~7的数\n");
	break;
}
```



## 循环

### for

``` c
// 打印1~10
int i;
for (i = 1; i <= 10; i++) {
	printf("i =%d\n", i);
}


// 求1~100的和
int i;
int sum = 0;

for (i = 1; i <= 100; i++) {
	sum += i;    或者   sum = sum + i;
}
printf("1~100的和为：%d\n", sum);
```

