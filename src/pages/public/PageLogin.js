import { NODE_ENV } from "../../env.js";
import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageLogin extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'login';
        this.activeMenuIndex = 3;
    }

    async main() {
        const email = NODE_ENV === 'dev' ? 'chuck@norris.lt' : '';
        const password = NODE_ENV === 'dev' ? 'chuck@norris.lt' : '';

        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-10 col-lg-6 col-xl-5 col-xxl-4">
                            <h1 class="display-1">Login</h1>
                            <div id="error" class="alert alert-danger d-none" role="alert">
                                A simple danger alert—check it out!
                            </div>
                            <form>
                                <div class="form-floating">
                                    <input type="email" value="${email}" class="form-control" id="email" placeholder="name@example.com">
                                    <label for="email">Email address</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" value="${password}" class="form-control" id="password" placeholder="Password">
                                    <label for="password">Password</label>
                                </div>
                                <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}