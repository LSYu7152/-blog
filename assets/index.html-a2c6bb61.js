import{_ as n,W as s,X as a,Y as e}from"./framework-d3c6dbde.js";const p={},t=e(`<h2 id="物件導向簡介" tabindex="-1"><a class="header-anchor" href="#物件導向簡介" aria-hidden="true">#</a> 物件導向簡介</h2><h3 id="什麼是物件導向" tabindex="-1"><a class="header-anchor" href="#什麼是物件導向" aria-hidden="true">#</a> 什麼是物件導向?</h3><p>物件導向是一種程式開發的抽象方針，主要的目的是為了提高軟體的<strong>重用性</strong>、<strong>擴充性</strong>。</p><p>不同於傳統的程式設計將設計程式看作一系列函式的概念，物件導向將程式的每一個部分視為一個小型的程式(機器)，使得程式問題得以容易被拆分、解析並處理。</p><h3 id="物件導向的抽象概念" tabindex="-1"><a class="header-anchor" href="#物件導向的抽象概念" aria-hidden="true">#</a> 物件導向的抽象概念</h3><p>在物件導向的設計中，會將事物實例的抽象特點找出並定義；而抽象指的即對應現實事物的非具名目標，例如：汽車、飛機、狗 等，這個行為稱為 <strong>類比</strong>。對於依據類比後的抽象概念定義出的具名事物則為 <strong>物件</strong>。</p><p>而物件導向的核心概念即依照這一抽象思考去延伸而出的。</p><h3 id="物件導向的特徵" tabindex="-1"><a class="header-anchor" href="#物件導向的特徵" aria-hidden="true">#</a> 物件導向的特徵</h3><p>物件導向的語言中都包含了兩個重要的部分：<strong>類別</strong> 與 <strong>物件</strong>。</p><h4 id="類別" tabindex="-1"><a class="header-anchor" href="#類別" aria-hidden="true">#</a> 類別</h4><p>物件導向中的物件抽象定義，包含一件事物所有的抽象特點(資料的格式、資料的操作方法、行為)；類似於模板、藍圖等。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 此處以Java做舉例 創造一個狗的類別 (具體實現與觀念請見 Java中的物件導向)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在類別中我們可以宣告 屬性(物件保有的資料) 與 方法(物件的行為)</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span><span class="token comment">// 每一個狗都會有名字，名字的格式為字串</span>
  
    <span class="token comment">// 每一個狗都會叫</span>
    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 狗叫的行為內容</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; Bark!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="物件" tabindex="-1"><a class="header-anchor" href="#物件" aria-hidden="true">#</a> 物件</h4><p>依據物件抽象定義所產生的<strong>實例</strong>，實例會有個體上的差異(相同格式的資料但有不同的數值)、相同的行為。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 此處以Java做舉例 依照前述所做狗的類別來創建一個實例 (具體實現與觀念請見 Java中的物件導向)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在Main Function中創建實例</span>
        <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 創建Dog的實例</span>
        dog<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Chihuahua&quot;</span><span class="token punctuation">;</span>
        dog<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
<span class="token comment">// -------------------</span>
<span class="token comment">// Chihuahua Bark!!</span>
<span class="token comment">// -------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="物件導向的三大特性" tabindex="-1"><a class="header-anchor" href="#物件導向的三大特性" aria-hidden="true">#</a> 物件導向的三大特性</h2><h3 id="封裝" tabindex="-1"><a class="header-anchor" href="#封裝" aria-hidden="true">#</a> 封裝</h3><p>在物件導向中，封裝性直接的影響了對於複雜程式專案下的彈性與擴充性；可以說封裝性的存在是為了保證未來程式在應變任何的變更、擴充下得以更容易的應對。</p><p>通過良好的封裝我們可以對一個複雜的專案程式進行拆分並簡化處理，對於拆分後的程式就可以進行多個工程師的分工，再利用封裝來避免單一的迷你程式結構被修改破壞，就如同積木一般讓我們可以重複利用並組裝。</p><h4 id="存取權限" tabindex="-1"><a class="header-anchor" href="#存取權限" aria-hidden="true">#</a> 存取權限</h4><p>封裝的在程式中具體的表現為存取權限；一般來說在物件導向中存取權限會分為<strong>一般成員</strong>、<strong>私有成員</strong>、<strong>保護成員</strong>，在Java中則更進一步分為四種權限等級</p><p>根據不同的存取權限設定，我們可以決定每一個迷你程式(物件)對外曝光的接口；<strong>隱藏更多數值修改操作上的內容</strong>，避免外部使用時錯誤的修改或存取。通過這種方式，我們可以讓別人在操作物件時只需要使用對應的方法而不需要去理解這個方法具體實現的方式。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 此處以Java舉例 (具體實現與觀念請見 Java中的物件導向)
// Car 類別設定為public 使得所有人皆可以使用此類別
public class Car {
    protected int speed = 0;// speed設定為protected，外部不應直接修改車的實際速度，但可以被子類別修改。
    // (註:此處直接設定數值的方式應避免於平常撰寫中使用)

    // 設定accelerate為公開 外部可以通過此加速方法來間接操作汽車的速度
    public void accelerate() {
        this.speed += 5;
    }

    // 設定brake為公開 外部可以通過此減速方法間接操作汽車的速度
    public void brake() {
        // 通過間接操作可以有效限制速度不會出現預期外的結果(變為負數)
        if (this.speed &gt; 0) {
            this.speed -= 5;
        } else {
            this.speed = 0;
        }
    }

    public int getSpeed() {
        return this.speed;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="繼承" tabindex="-1"><a class="header-anchor" href="#繼承" aria-hidden="true">#</a> 繼承</h3><p>物件導向中，除了封裝原本的程式細節外，時常我們也需要針對原有的程式內容再進行補充(擴充)，此時通常我們就會利用繼承來滿足這樣的需求。通過繼承來擴充原有程式可以避免破壞原本程式的封裝性，也可以更好的針對不同的情況對程式進行擴充。</p><p>在物件導向中，一個類別B如果繼承了類別A，我們稱類別B為類別A的<strong>子類別</strong>，子類別相較於原有的類別(<strong>父類別</strong> - 此處為類別A)會有更細節的內容。</p><p>舉例來說 休旅車、跑車 可能就是 &quot;汽車&quot; 的子類別，他們相較於原本汽車提供的內容更多、也更細節；而共用的汽車的部分的程式碼，則也不需要重複撰寫。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 此處以Java舉例 Car類別使用封裝中的範例 (具體實現與觀念請見 Java中的物件導向)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RaceCar</span> <span class="token keyword">extends</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">launchControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加入跑車才有的彈射起步</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;彈射起步&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SUV</span> <span class="token keyword">extends</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 此處不做更多詳細的程式細節避免混淆</span>
<span class="token comment">// SUV與RaceCar都能有更多各自不同的屬性與方法 同時他們之中也都包含了Car的方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用上的範例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在Main Function中創建實例</span>
        <span class="token class-name">RaceCar</span> raceCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RaceCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        raceCar<span class="token punctuation">.</span><span class="token function">launchControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 跑車具有彈射起步的方法</span>
        raceCar<span class="token punctuation">.</span><span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 同時也擁有汽車的加速方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>raceCar<span class="token punctuation">.</span><span class="token function">getSpeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
<span class="token comment">// -------------------</span>
<span class="token comment">// 彈射起步</span>
<span class="token comment">// 55</span>
<span class="token comment">// -------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多型" tabindex="-1"><a class="header-anchor" href="#多型" aria-hidden="true">#</a> 多型</h3><p>多型(polymorphism)指的是不同資料型態的實體之間的不同行為，可以被統一的接口所調用；多型在物件導向中是一個非常重要的概念，他用來表示當類別被繼承時，除了擴充原有的內容以外，原先的一些執行細節也可能因為繼承而有了差異；而在程式的發展過程中，多型已經成為難以取代的一部分，通過多型我們能使得程式能有更複雜的變化與彈性。</p><p>對於多型的細節請參考 <a href="/java/4af597">Override與Overloading</a></p><p>舉例來說 對於休旅車與跑車來說，雖然都是汽車的子類別，但可能因為繼承的關係他們各自在加速上與煞車上有不同的表現</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 此處以Java舉例 Car類別使用封裝中的範例 (具體實現與觀念請見 Java中的物件導向)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RaceCar</span> <span class="token keyword">extends</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>

    <span class="token comment">// 修改了原先汽車中的加速方法，變得更快</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">launchControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加入跑車才有的彈射起步</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;彈射起步&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SUV</span> <span class="token keyword">extends</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改了原先汽車中的加速方法，變得更慢</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用上的範例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在Main Function中創建實例</span>
        <span class="token class-name">RaceCar</span> raceCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RaceCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        raceCar<span class="token punctuation">.</span><span class="token function">launchControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        raceCar<span class="token punctuation">.</span><span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;跑車的速度: &quot;</span> <span class="token operator">+</span> raceCar<span class="token punctuation">.</span><span class="token function">getSpeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">SUV</span> suv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SUV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        suv<span class="token punctuation">.</span><span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;休旅車的速度: &quot;</span> <span class="token operator">+</span> suv<span class="token punctuation">.</span><span class="token function">getSpeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
<span class="token comment">// -------------------</span>
<span class="token comment">// 彈射起步</span>
<span class="token comment">// 跑車的速度: 60</span>
<span class="token comment">// 休旅車的速度: 3</span>
<span class="token comment">// -------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),c=[t];function i(o,l){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","index.html.vue"]]);export{d as default};
